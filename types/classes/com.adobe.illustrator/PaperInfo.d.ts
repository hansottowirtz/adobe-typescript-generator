/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Paper information */
		class PaperInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * Is it a custom paper?
			 * @type {boolean}
			 */
			public customPaper: boolean;
			/**
			 * the paper's height (in points)
			 * @type {number}
			 */
			public height: number;
			/**
			 * the imageable area
			 * @type {any[]}
			 */
			public imageableArea: any[];
			/**
			 * the paper's width (in points)
			 * @type {number}
			 */
			public width: number;
		}
	}
}