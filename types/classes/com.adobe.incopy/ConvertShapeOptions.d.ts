/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConvertShapeOptions extends Adobe.Csawlib.CSEnumBase {
			/** Converts the object to a rectangle with beveled corners. */
			public static readonly CONVERT_TO_BEVELED_RECTANGLE: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to a closed path. */
			public static readonly CONVERT_TO_CLOSED_PATH: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Converts the object to a rectangle with inverse rounded 
			 * corners.
			 */
			public static readonly CONVERT_TO_INVERSE_ROUNDED_RECTANGLE: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Converts the object to a line that connects the upper left 
			 * and lower right corners of the object's bounding box.
			 */
			public static readonly CONVERT_TO_LINE: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to an open path. */
			public static readonly CONVERT_TO_OPEN_PATH: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to an ellipse. */
			public static readonly CONVERT_TO_OVAL: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to a polygon. */
			public static readonly CONVERT_TO_POLYGON: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to a rectangle. */
			public static readonly CONVERT_TO_RECTANGLE: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to a rectangle with rounded corners. */
			public static readonly CONVERT_TO_ROUNDED_RECTANGLE: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Converts the object to straight line. If the object is a 
			 * square, circle, or its bounding box is wider than it is 
			 * tall, the line is horizontal and connects the center points 
			 * on the vertical sides of the bounding box. If the object's 
			 * bounding box is taller than it is wide, the line connects 
			 * the center points of the horizontal sides of the bounding 
			 * box.
			 */
			public static readonly CONVERT_TO_STRAIGHT_LINE: Adobe.Incopy.ConvertShapeOptions;
			/** Converts the object to a triangle. */
			public static readonly CONVERT_TO_TRIANGLE: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_BEVELED_RECTANGLE. Converts the object 
			 * to a rectangle with beveled corners.
			 */
			public static readonly convertToBeveledRectangle: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_CLOSED_PATH. Converts the object to a 
			 * closed path.
			 */
			public static readonly convertToClosedPath: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_INVERSE_ROUNDED_RECTANGLE. Converts the 
			 * object to a rectangle with inverse rounded corners.
			 */
			public static readonly convertToInverseRoundedRectangle: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_LINE. Converts the object to a line 
			 * that connects the upper left and lower right corners of the 
			 * object's bounding box.
			 */
			public static readonly convertToLine: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_OPEN_PATH. Converts the object to an 
			 * open path.
			 */
			public static readonly convertToOpenPath: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_OVAL. Converts the object to an 
			 * ellipse.
			 */
			public static readonly convertToOval: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_POLYGON. Converts the object to a 
			 * polygon.
			 */
			public static readonly convertToPolygon: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_RECTANGLE. Converts the object to a 
			 * rectangle.
			 */
			public static readonly convertToRectangle: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_ROUNDED_RECTANGLE. Converts the object 
			 * to a rectangle with rounded corners.
			 */
			public static readonly convertToRoundedRectangle: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_STRAIGHT_LINE. Converts the object to 
			 * straight line. If the object is a square, circle, or its 
			 * bounding box is wider than it is tall, the line is 
			 * horizontal and connects the center points on the vertical 
			 * sides of the bounding box. If the object's bounding box is 
			 * taller than it is wide, the line connects the center points 
			 * of the horizontal sides of the bounding box.
			 */
			public static readonly convertToStraightLine: Adobe.Incopy.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_TRIANGLE. Converts the object to a 
			 * triangle.
			 */
			public static readonly convertToTriangle: Adobe.Incopy.ConvertShapeOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}