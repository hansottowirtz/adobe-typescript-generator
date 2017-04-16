/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class ProjectItem extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.ProjectItemCollection}
			 * @readonly
			 */
			public readonly children: Adobe.Premiere.ProjectItemCollection;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly treePath: string;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly type: number;
			/**
			 * @param {string} name
			 * @returns {Adobe.Premiere.ProjectItem}
			 */
			public createBin(name: string): Adobe.Premiere.ProjectItem;
			/**
			 * @returns {void}
			 */
			public deleteBin(): void;
			/**
			 * @param {ProjectItem} destination
			 * @returns {void}
			 */
			public moveBin(destination: ProjectItem): void;
			/**
			 * @param {string} name
			 * @returns {boolean}
			 */
			public renameBin(name: string): boolean;
		}
	}
}