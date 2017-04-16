/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class ProjectItem extends Adobe.Csawlib.CSHostObject {
			public readonly children: Adobe.Premiere.ProjectItemCollection;
			public readonly name: string;
			public readonly treePath: string;
			public readonly type: number;
			/**
			 * @param {string} name
			 */
			public createBin(name: string): Adobe.Premiere.ProjectItem;
			public deleteBin(): void;
			/**
			 * @param {ProjectItem} destination
			 */
			public moveBin(destination: ProjectItem): void;
			/**
			 * @param {string} name
			 */
			public renameBin(name: string): boolean;
		}
	}
}