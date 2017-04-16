/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class CsxsResourceCentral extends Adobe.Csawlib.CSHostObject {
			public getBrightness(): string;
			/**
			 * @param {string} filePath 
			 */
			public onAssetDoubleClick(filePath: string): void;
			/**
			 * @param {string} filePath 
			 */
			public onAssetDownloaded(filePath: string): void;
			/**
			 * @param {string} urlString 
			 */
			public openURL(urlString: string): void;
			/**
			 * @param {string} token 
			 */
			public validateClient(token: string): boolean;
		}
	}
}