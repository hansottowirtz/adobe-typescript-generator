/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** paper size */
		class Paper extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the paper name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the paper information
			 * @type {Adobe.Illustrator.PaperInfo}
			 */
			public paperInfo: Adobe.Illustrator.PaperInfo;
		}
	}
}