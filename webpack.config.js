const path = require("path");

module.exports = {
  //  modeはバンドルするファイルに影響するプロパティ。
  // production (デフォルト値) development none
  mode: "development",

  // バンドルするファイル
  entry: "./src/index.tsx",

  // バンドルしたファイルを出力する場所　__dirnameは /
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // modulesはbabel-loaderやcss-loaderといった Loader の設定を行うプロパティ
  module: {
    // Loader を設定
    rules: [
      {
        // test　どのファイルを処理の対象とするかといった設定。
        test: /\.(ts|tsx)$/,
        // 使用する Loader を書く　！後ろから処理が行われる
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // webpack-dev-serverの設定を行うプロパティ コードを更新すると自動的にビルドしてブラウザのビューが更新される
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  // resolveは、インポート時にのパスの問題(絶対パスや相対パス)を解決するプロパティ
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // サーバー側とブラウザ側(フロント)どちらにコンパイルするかを設定するプロパティ
  target: "web",
};
