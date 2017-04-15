/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Path point information (returned by entire path 
		 * dataClassProperty of path item class)
		 */
		class PathPointInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the position of the anchor (in coordinates) */
			public anchor: any[];
			/** the point type, smooth/corner */
			public kind: Adobe.Photoshop.PointKind;
			/** location of the left direction point (in position) */
			public leftDirection: any[];
			/** location of the right direction point (out position) */
			public rightDirection: any[];
		}
	}
}