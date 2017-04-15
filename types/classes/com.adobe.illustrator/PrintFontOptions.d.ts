/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the font options for printing */
		class PrintFontOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the font download mode ( default: 
			 * PrintFontDownloadMode.DOWNLOADSUBSET )
			 */
			public downloadFonts: Adobe.Illustrator.PrintFontDownloadMode;
			/**
			 * the font substitution policy ( default: 
			 * FontSubstitutionPolicy.SUBSTITUTEOBLIQUE )
			 */
			public fontSubstitution: Adobe.Illustrator.FontSubstitutionPolicy;
		}
	}
}