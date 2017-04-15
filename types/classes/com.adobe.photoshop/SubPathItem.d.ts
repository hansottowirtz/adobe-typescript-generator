/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SubPathItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** If true, the path is closed. */
			public readonly closed: boolean;
			/** The sub path operation on other sub paths. */
			public readonly operation: Adobe.Photoshop.ShapeOperation;
			/** The path points collection in the sub path. */
			public readonly pathPoints: Adobe.Photoshop.PathPoints;
		}
	}
}