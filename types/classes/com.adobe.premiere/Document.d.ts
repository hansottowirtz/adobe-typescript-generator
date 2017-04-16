/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Document extends Adobe.Csawlib.CSHostObject {
			/**
			 * @returns {string}
			 */
			public getFilePath(): string;
			/**
			 * @param {any} arg1 
			 * @returns {boolean}
			 */
			public importFiles(arg1: any): boolean;
		}
	}
}