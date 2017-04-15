/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Information about a path. You do not use the sub path item 
		 * object to create a path. Rather, you create path segments 
		 * using the sub path info object. Use the sub path item object 
		 * to retrieve information about a path. All properties are 
		 * read-only.
		 */
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