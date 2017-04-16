/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Project extends Adobe.Csawlib.CSHostObject {
			public activeSequence: Adobe.Premiere.Sequence;
			public readonly documentID: string;
			public readonly name: string;
			public readonly path: string;
			public readonly rootItem: Adobe.Premiere.ProjectItem;
			public readonly sequences: Adobe.Premiere.SequenceCollection;
			/**
			 * @param {string} sequenceName
			 * @param {string} placeholderID
			 */
			public createNewSequence(sequenceName: string, placeholderID: string): void;
			/**
			 * @param {string} exportPath
			 */
			public exportFinalCutProXML(exportPath: string): boolean;
			/**
			 * @param {string} exportControllerName
			 */
			public exportTimeline(exportControllerName: string): number;
			/**
			 * @param {any} arg1
			 */
			public importFiles(arg1: any): boolean;
			/**
			 * @param {string} sequenceID
			 */
			public openSequence(sequenceID: string): boolean;
			/**
			 * @param {string} saveAsPath
			 */
			public saveAs(saveAsPath: string): boolean;
		}
	}
}