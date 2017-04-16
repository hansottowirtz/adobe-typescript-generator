/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Project extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.Sequence}
			 */
			public activeSequence: Adobe.Premiere.Sequence;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly documentID: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly path: string;
			/**
			 * @type {Adobe.Premiere.ProjectItem}
			 * @readonly
			 */
			public readonly rootItem: Adobe.Premiere.ProjectItem;
			/**
			 * @type {Adobe.Premiere.SequenceCollection}
			 * @readonly
			 */
			public readonly sequences: Adobe.Premiere.SequenceCollection;
			/**
			 * @param {string} sequenceName
			 * @param {string} placeholderID
			 * @returns {void}
			 */
			public createNewSequence(sequenceName: string, placeholderID: string): void;
			/**
			 * @param {string} exportPath
			 * @returns {boolean}
			 */
			public exportFinalCutProXML(exportPath: string): boolean;
			/**
			 * @param {string} exportControllerName
			 * @returns {number}
			 */
			public exportTimeline(exportControllerName: string): number;
			/**
			 * @param {any} arg1
			 * @returns {boolean}
			 */
			public importFiles(arg1: any): boolean;
			/**
			 * @param {string} sequenceID
			 * @returns {boolean}
			 */
			public openSequence(sequenceID: string): boolean;
			/**
			 * @param {string} saveAsPath
			 * @returns {boolean}
			 */
			public saveAs(saveAsPath: string): boolean;
		}
	}
}