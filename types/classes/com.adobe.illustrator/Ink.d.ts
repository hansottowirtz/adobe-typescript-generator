/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Ink extends IllustratorHostObject {
			/** the ink information */
			public inkInfo: InkInfo;
			/** the ink's name */
			public name: string;
		}
	}
}