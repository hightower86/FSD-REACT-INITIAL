import { BuildPaths } from './types/config';
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack, { WebpackPluginInstance } from "webpack"

export function buildPlugins(
    paths: BuildPaths
): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}