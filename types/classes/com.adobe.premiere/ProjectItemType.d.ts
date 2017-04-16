/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class ProjectItemType extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly BIN: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly CLIP: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly FILE: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly ROOT: number;
		}
	}
}