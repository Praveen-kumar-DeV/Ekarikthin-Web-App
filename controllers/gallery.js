const cloudinary = require("cloudinary").v2;

/*exports.getImages = async (req, res) => {
  try {
    const images = await cloudinary.search
      .expression("folder:Home")
      .max_results(210)
      .execute();

    const data = images.resources;
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
   
    res.status(200).json({
      success: true,
      images: data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};*/

exports.cloudurl = async (req, res) => {

const searchOptions = {expression: 'folder:Home', sort_by: 'public_id', order: 'desc'};
cloudinary.search
  .expression(searchOptions.expression)
  .max_results(300)
  .execute()
  .then(result => {
    const imageUrls = result.resources.map(resource => resource.url);
    for (let i = imageUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
    }
   
    res.json(imageUrls);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Internal server error');
  });}