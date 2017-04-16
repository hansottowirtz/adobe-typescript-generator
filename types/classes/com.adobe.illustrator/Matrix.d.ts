/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Matrix extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * @type {number}
			 */
			public mValueA: number;
			/**
			 * @type {number}
			 */
			public mValueB: number;
			/**
			 * @type {number}
			 */
			public mValueC: number;
			/**
			 * @type {number}
			 */
			public mValueD: number;
			/**
			 * @type {number}
			 */
			public mValueTX: number;
			/**
			 * @type {number}
			 */
			public mValueTY: number;
		}
	}
}