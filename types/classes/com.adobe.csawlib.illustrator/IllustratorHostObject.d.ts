/// <reference path="../../packages/com.adobe.csawlib.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/**
		 * Base for Illustrator classes, which encapsulates host object 
		 * and all interaction with the host through the HBAPI.
		 */
		class IllustratorHostObject extends Adobe.Csawlib.CSHostObject {
			public readonly parent: any;
			public constructor();
		}
	}
}