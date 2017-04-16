/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class App extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.Csxs}
			 * @readonly
			 */
			public readonly csxs: Adobe.Premiere.Csxs;
			/**
			 * @type {Adobe.Premiere.CsxsCSReview}
			 * @readonly
			 */
			public readonly encoder: Adobe.Premiere.CsxsCSReview;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly getPProPrefPath: string;
			/**
			 * @type {Adobe.Premiere.Project}
			 * @readonly
			 */
			public readonly project: Adobe.Premiere.Project;
			/**
			 * @param {string} outputFS
			 * @param {string} csawTemplatePath
			 * @returns {void}
			 */
			public buildActionScriptWrappers(outputFS: string, csawTemplatePath: string): void;
			/**
			 * @param {string} filePath
			 * @returns {boolean}
			 */
			public isDocument(filePath: string): boolean;
			/**
			 * @returns {boolean}
			 */
			public isDocumentOpen(): boolean;
			/**
			 * @param {string} filePath
			 * @returns {boolean}
			 */
			public openDocument(filePath: string): boolean;
			/**
			 * @returns {void}
			 */
			public quit(): void;
			/**
			 * @param {string} message
			 * @returns {void}
			 */
			public trace(message: string): void;
		}
	}
}