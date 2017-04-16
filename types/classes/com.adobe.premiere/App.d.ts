/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class App extends Adobe.Csawlib.CSHostObject {
			public readonly csxs: Adobe.Premiere.Csxs;
			public readonly encoder: Adobe.Premiere.CsxsCSReview;
			public readonly getPProPrefPath: string;
			public readonly project: Adobe.Premiere.Project;
			/**
			 * @param {string} outputFS
			 * @param {string} csawTemplatePath
			 */
			public buildActionScriptWrappers(outputFS: string, csawTemplatePath: string): void;
			/**
			 * @param {string} filePath
			 */
			public isDocument(filePath: string): boolean;
			public isDocumentOpen(): boolean;
			/**
			 * @param {string} filePath
			 */
			public openDocument(filePath: string): boolean;
			public quit(): void;
			/**
			 * @param {string} message
			 */
			public trace(message: string): void;
		}
	}
}