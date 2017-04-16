/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to exporting Illustrator paths */
		class ExportOptionsIllustrator extends Adobe.Photoshop.ExportOptions {
			/**
			 * which path to export ( default: 
			 * IllustratorPathType.DOCUMENTBOUNDS )
			 * @type {Adobe.Photoshop.IllustratorPathType}
			 */
			public path: Adobe.Photoshop.IllustratorPathType;
			/**
			 * name of path to export. Only valid if you are exporting a 
			 * named path
			 * @type {string}
			 */
			public pathName: string;
		}
	}
}