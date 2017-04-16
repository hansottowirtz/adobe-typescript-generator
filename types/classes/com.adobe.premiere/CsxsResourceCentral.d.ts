/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class CsxsResourceCentral extends Adobe.Csawlib.CSHostObject {
			/**
			 * @returns {string}
			 */
			public getBrightness(): string;
			/**
			 * @param {string} filePath 
			 * @returns {void}
			 */
			public onAssetDoubleClick(filePath: string): void;
			/**
			 * @param {string} filePath 
			 * @returns {void}
			 */
			public onAssetDownloaded(filePath: string): void;
			/**
			 * @param {string} urlString 
			 * @returns {void}
			 */
			public openURL(urlString: string): void;
			/**
			 * @param {string} token 
			 * @returns {boolean}
			 */
			public validateClient(token: string): boolean;
		}
	}
}