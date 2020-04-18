const apiKey = 'kgIDxdkKHpVveU133z5_3EecChCgf22mTgfxJb2Am_K8Up3GoWY57g-3yrVfXl5Hl6KavxsqV6FJen07N5JLP5-bTcfFsKV9Jgwdm6wNKMk-oGEHkOrw9hL9NCKbXnYx';
const yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();})
        .then(jsonResponse => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => {
              return {
                id: business.id, 
                imageSrc: business.image_url, 
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
              };
            });
          }
        });
  }
};


export default yelp;
