/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Path point information (returned by entire path 
		 * dataClassProperty of path item class)
		 */
		class PathPointInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the position of the anchor (in coordinates)
			 * @type {any[]}
			 */
			public anchor: any[];
			/**
			 * the point type, smooth/corner
			 * @type {Adobe.Photoshop.PointKind}
			 */
			public kind: Adobe.Photoshop.PointKind;
			/**
			 * location of the left direction point (in position)
			 * @type {any[]}
			 */
			public leftDirection: any[];
			/**
			 * location of the right direction point (out position)
			 * @type {any[]}
			 */
			public rightDirection: any[];
		}
	}
}