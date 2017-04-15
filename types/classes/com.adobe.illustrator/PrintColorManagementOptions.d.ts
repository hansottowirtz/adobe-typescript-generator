/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the color management options */
		class PrintColorManagementOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color management profile mode ( default: 
			 * PrintColorProfile.SOURCEPROFILE )
			 */
			public colorProfileMode: Adobe.Illustrator.PrintColorProfile;
			/**
			 * the color management intent type ( default: 
			 * PrintColorIntent.RELATIVECOLORIMETRIC )
			 */
			public intent: Adobe.Illustrator.PrintColorIntent;
			/** the color management profile name */
			public name: string;
		}
	}
}