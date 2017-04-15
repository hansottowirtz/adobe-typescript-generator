/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Thumbnail extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public readonly aliasType: string;
			/** This is not a Property Description. */
			public readonly children: any[];
			/** This is not a Property Description. */
			public readonly container: boolean;
			/** This is not a Property Description. */
			public readonly core: Adobe.Bridge.Infoset;
			/** This is not a Property Description. */
			public readonly creationDate: string;
			/** This is not a Property Description. */
			public displayMode: string;
			/** This is not a Property Description. */
			public displayPath: string;
			/** This is not a Property Description. */
			public readonly exists: boolean;
			/** This is not a Property Description. */
			public readonly extensions: any[];
			/** This is not a Property Description. */
			public readonly hasMetadata: boolean;
			/** This is not a Property Description. */
			public readonly hidden: boolean;
			/** This is not a Property Description. */
			public iconPath: string;
			/** This is not a Property Description. */
			public label: string;
			/** This is not a Property Description. */
			public readonly lastModifiedDate: string;
			/** This is not a Property Description. */
			public readonly location: string;
			/** This is not a Property Description. */
			public readonly locked: boolean;
			/** This is not a Property Description. */
			public metadata: any;
			/** This is not a Property Description. */
			public readonly mimeType: string;
			/** This is not a Property Description. */
			public readonly model: any;
			/** This is not a Property Description. */
			public name: string;
			/** This is not a Property Description. */
			public readonly parent: Adobe.Bridge.Thumbnail;
			/** This is not a Property Description. */
			public readonly path: string;
			/** This is not a Property Description. */
			public rating: number;
			/** This is not a Property Description. */
			public rotation: number;
			/** This is not a Property Description. */
			public readonly spec: File;
			/** This is not a Property Description. */
			public synchronousMetadata: any;
			/** This is not a Property Description. */
			public readonly type: string;
			/** This is not a Property Description. */
			public readonly uri: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} thumbnail - 
			 */
			public add(thumbnail: Thumbnail): void;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 */
			public copyTo(path: string): boolean;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {Thumbnail} thumbnail - 
			 */
			public insert(thumbnail: Thumbnail): void;
			/**
			 * This is not a Method Description.
			 * @param {string} path - 
			 */
			public moveTo(path: string): boolean;
			/** This is not a Method Description. */
			public open(): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} appPath - 
			 */
			public openWith(appPath: string): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} infoset - 
			 */
			public refresh(infoset: string): boolean;
			/**
			 * This is not a Method Description.
			 * @param {Function} callback - 
			 */
			public registerInterest(callback: Function): void;
			/** This is not a Method Description. */
			public remove(): void;
			/** This is not a Method Description. */
			public resolve(): Adobe.Bridge.Thumbnail;
			/** This is not a Method Description. */
			public revealInSystemBrowser(): void;
			/**
			 * This is not a Method Description.
			 * @param {Function} callback - 
			 */
			public unregisterInterest(callback: Function): void;
			/** This is not a Method Description. */
			public verifyExternalChanges(): void;
		}
	}
}