/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** printer's ink */
		class Ink extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the ink information
			 * @type {Adobe.Illustrator.InkInfo}
			 */
			public inkInfo: Adobe.Illustrator.InkInfo;
			/**
			 * the ink's name
			 * @type {string}
			 */
			public name: string;
		}
	}
}