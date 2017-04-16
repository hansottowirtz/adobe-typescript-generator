/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** printer's ink */
		class Ink extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the ink information */
			public inkInfo: Adobe.Illustrator.InkInfo;
			/** the ink's name */
			public name: string;
		}
	}
}