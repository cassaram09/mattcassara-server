module.exports = ({ env }) => {
  return {
    upload: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ID"),
        secretAccessKey: env("AWS_KEY"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  };
};
