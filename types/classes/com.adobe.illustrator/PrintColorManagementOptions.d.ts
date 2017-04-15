/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
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