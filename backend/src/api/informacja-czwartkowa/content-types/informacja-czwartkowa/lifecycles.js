const axios = require("axios");
const emailTemplate = require("../../../../utils/emailTemplate.js");

module.exports = {
  async afterUpdate(event) {
    const { result, params } = event;

    if (params.data.publishedAt) {
      try {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:1337/api/newsletter-emails",
        });

        const emails = data.data.map((emailObj) => emailObj.attributes.email);
        const { id, numer, data: dataNewslettera, wydarzenia } = result;

        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: emails,
            from: {email: 'matteusz5564@gmail.com', name: 'Beskid Zielony'}
          },
          emailTemplate,
          {
            id,
            numer,
            dataNewslettera,
            wydarzenia,
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  },
};
