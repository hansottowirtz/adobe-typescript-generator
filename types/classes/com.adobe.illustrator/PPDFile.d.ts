/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** a PPD file */
		class PPDFile extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the PPD model name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the PPD file information
			 * @type {Adobe.Illustrator.PPDFileInfo}
			 */
			public PPDInfo: Adobe.Illustrator.PPDFileInfo;
		}
	}
}