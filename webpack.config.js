const webpackConfig = {
    resolve: {
        fallback: { 
            buffer: require.resolve('buffer/'),
         },
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};


// const webpackConfig = {
//     resolve: {
//         fallback: {
//             buffer: require.resolve('buffer/'),
//         },
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//             Buffer: ['buffer', 'Buffer'],
//         }),
//     ],
// };
