module.exports = {
  siteMetadata: {
    title: 'rowdy.',
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123731367-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
  }],
}
