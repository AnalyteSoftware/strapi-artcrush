module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-postmark",
      providerOptions: {
        apiKey: env("POSTMARK_API"),
      },
      settings: {
        defaultMessageStream: "outbound",
        defaultFrom: "info@artcrush.gallery",
        defaultTo: "info@artcrush.gallery",
        defaultReplyTo: "info@artcrush.gallery",
        defaultVariables: {
          sentBy: "strapi",
        },
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_URL"),
      apiToken: env("VERCEL_TOKEN"),
      appFilter: env("VERCEL_NAME"),
      teamFilter: env("VERCEL_TEAM_ID"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  // ...
});
