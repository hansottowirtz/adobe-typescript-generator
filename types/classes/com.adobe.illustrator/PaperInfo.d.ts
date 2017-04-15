/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Paper information */
		class PaperInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Is it a custom paper? */
			public customPaper: boolean;
			/** the paper's height (in points) */
			public height: number;
			/** the imageable area */
			public imageableArea: any[];
			/** the paper's width (in points) */
			public width: number;
		}
	}
}