/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PointType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CORNER. The point is a corner point, it has either 
			 * one direction line, or two independent direction lines.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly corner: Adobe.Incopy.PointType;
			/**
			 * The point is a corner point, it has either one direction 
			 * line, or two independent direction lines.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly CORNER: Adobe.Incopy.PointType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PLAIN. The point is a plain point, it has no 
			 * direction lines.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly plain: Adobe.Incopy.PointType;
			/**
			 * The point is a plain point, it has no direction lines.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly PLAIN: Adobe.Incopy.PointType;
			/**
			 * Alias for SMOOTH. The point is a smooth point, it has two 
			 * direction lines which are parallel.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly smooth: Adobe.Incopy.PointType;
			/**
			 * The point is a smooth point, it has two direction lines 
			 * which are parallel.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly SMOOTH: Adobe.Incopy.PointType;
			/**
			 * Alias for SYMMETRICAL. A special type of smooth point with 
			 * two direction lines of equal length.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly symmetrical: Adobe.Incopy.PointType;
			/**
			 * A special type of smooth point with two direction lines of 
			 * equal length.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public static readonly SYMMETRICAL: Adobe.Incopy.PointType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}