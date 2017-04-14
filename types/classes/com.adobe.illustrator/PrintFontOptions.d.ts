/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintFontOptions extends IllustratorHostObject {
			/**
			 * the font download mode ( default: 
			 * PrintFontDownloadMode.DOWNLOADSUBSET )
			 */
			public downloadFonts: PrintFontDownloadMode;
			/**
			 * the font substitution policy ( default: 
			 * FontSubstitutionPolicy.SUBSTITUTEOBLIQUE )
			 */
			public fontSubstitution: FontSubstitutionPolicy;
		}
	}
}