/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A point on a path */
		class PathPoint extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the position (coordinates) of the anchor point
			 * @type {any[]}
			 * @readonly
			 */
			public readonly anchor: any[];
			/**
			 * the type of point: smooth/corner
			 * @type {Adobe.Photoshop.PointKind}
			 * @readonly
			 */
			public readonly kind: Adobe.Photoshop.PointKind;
			/**
			 * location of the left direction point (in position)
			 * @type {any[]}
			 * @readonly
			 */
			public readonly leftDirection: any[];
			/**
			 * location of the right direction point (out position)
			 * @type {any[]}
			 * @readonly
			 */
			public readonly rightDirection: any[];
		}
	}
}