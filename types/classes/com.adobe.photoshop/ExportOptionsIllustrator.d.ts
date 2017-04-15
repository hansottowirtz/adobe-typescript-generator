/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ExportOptionsIllustrator extends Adobe.Photoshop.ExportOptions {
			/**
			 * which path to export ( default: 
			 * IllustratorPathType.DOCUMENTBOUNDS )
			 */
			public path: Adobe.Photoshop.IllustratorPathType;
			/**
			 * name of path to export. Only valid if you are exporting a 
			 * named path
			 */
			public pathName: string;
		}
	}
}