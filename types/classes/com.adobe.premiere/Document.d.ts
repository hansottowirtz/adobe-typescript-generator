/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Document extends Adobe.Csawlib.CSHostObject {
			public getFilePath(): string;
			/**
			 * @param {any} arg1 
			 */
			public importFiles(arg1: any): boolean;
		}
	}
}