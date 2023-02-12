import path from 'path';
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions, BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {

  console.log(env)

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT
  }

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config
}
