/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the color management options */
		class PrintColorManagementOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color management profile mode ( default: 
			 * PrintColorProfile.SOURCEPROFILE )
			 * @type {Adobe.Illustrator.PrintColorProfile}
			 */
			public colorProfileMode: Adobe.Illustrator.PrintColorProfile;
			/**
			 * the color management intent type ( default: 
			 * PrintColorIntent.RELATIVECOLORIMETRIC )
			 * @type {Adobe.Illustrator.PrintColorIntent}
			 */
			public intent: Adobe.Illustrator.PrintColorIntent;
			/**
			 * the color management profile name
			 * @type {string}
			 */
			public name: string;
		}
	}
}