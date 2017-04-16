/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the font options for printing */
		class PrintFontOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the font download mode ( default: 
			 * PrintFontDownloadMode.DOWNLOADSUBSET )
			 * @type {Adobe.Illustrator.PrintFontDownloadMode}
			 */
			public downloadFonts: Adobe.Illustrator.PrintFontDownloadMode;
			/**
			 * the font substitution policy ( default: 
			 * FontSubstitutionPolicy.SUBSTITUTEOBLIQUE )
			 * @type {Adobe.Illustrator.FontSubstitutionPolicy}
			 */
			public fontSubstitution: Adobe.Illustrator.FontSubstitutionPolicy;
		}
	}
}