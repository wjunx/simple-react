import path from 'path';
import { readFileSync } from 'fs';
import cjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';

const pkgPath = path.resolve(__dirname, '../../packages');

const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

export function getPackageJSON(pkgName) {
	const pt = `${resolvePkgPath(pkgName)}/package.json`;
	const str = readFileSync(pt, { encoding: 'utf-8' });
	return JSON.parse(str);
}

export function getBaseRollupPlugins({
	alias = {
		__DEV__: true,
		preventAssignment: true
	},
	typescript = {}
} = {}) {
	return [replace(alias), ts(typescript), cjs()];
}
