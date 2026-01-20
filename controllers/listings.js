
const Listing = require("../models/listing");


module.exports.indexListings = async (req, res) => {
  const { search, category } = req.query;
  let query = {};

  // Allowed categories
  const categories = [
    "Beach",
    "Mountain",
    "Farm",
    "Room",
    "Urban",
    "Villa",
    "Cabin",
    "Hotel",
  ];

  try {
    // CATEGORY filter
    if (category && categories.includes(category)) {
      query.category = category;
    }

    // SEARCH filter (title + location + description)
    if (search && search.trim().length > 0) {
      const searchRegex = new RegExp(search.trim(), "i");
      query.$or = [
        { title: searchRegex },
        { description: searchRegex },
        { location: searchRegex },
      ];
    }

    // FETCH FROM DB
    const allListings = await Listing.find(query);

    //  IMPORTANT FIX: redirect MAT karo
    if (!allListings || allListings.length === 0) {
      req.flash(
        "error",
        `No listings found${search ? ` for "${search}"` : ""}`
      );
      return res.render("listings/index.ejs", {
        allListings: [],
        search,
        category,
      });
    }

    // RENDER PAGE
    res.render("listings/index.ejs", {
      allListings,
      search,
      category,
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong!");
    return res.render("listings/index.ejs", {
      allListings: [],
      search,
      category,
    });
  }
};








module.exports.newListingForm = (req, res) => {
     res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
     let { id } = req.params;
     const listing = await Listing.findById(id).populate({path:"review",populate:{path:"author"}}).populate("owner");
     if(!listing){
             req.flash("error", "Listing dose not exits");
              return res.redirect("/listings");
     }
     console.log(listing);
     res.render("listings/show", { listing });
}

module.exports.createListing = async (req, res, next) => {
    
     let url = req.file.path;
     let filename = req.file.filename;
     
     const newListing = new Listing(req.body.listing);
    
     newListing.owner = req.user._id;
     newListing.image = {url, filename};
     await newListing.save();
     req.flash("success", "New listing Created");
     res.redirect("/listings");
}

module.exports.editListingForm = async (req, res) => {
     let { id } = req.params;
     const listing = await Listing.findById(id);
      if(!listing){
             req.flash("error", "Listing dose not exits");
              return res.redirect("/listings");
     }
     let originalImageUrl = listing.image.url;
     originalImageUrl = originalImageUrl.replace("upload/", "upload/w_250/");
     
     res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
     
     let { id } = req.params;
     let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
     if(typeof req.file !== 'undefined'){
          let url = req.file.path;
          let filename = req.file.filename;
          listing.image = {url, filename};
          await listing.save();
     }
     
    
      req.flash("success", "Listing Updated!");
     res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
     let { id } = req.params;
     let deletedListing = await Listing.findByIdAndDelete(id);
     console.log(deletedListing);
     req.flash("success", "listing Deleted!");
     res.redirect("/listings");
}
 

