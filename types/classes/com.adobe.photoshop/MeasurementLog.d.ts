/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** the log of measurements taken */
		class MeasurementLog extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * delete measurements
			 * @param {Adobe.Photoshop.MeasurementRange} range which 
			 * measurements to delete.  Default to selected
			 * @returns {void}
			 */
			public deleteMeasurements(range: Adobe.Photoshop.MeasurementRange): void;
			/**
			 * export measurements
			 * @param {File} file the file to export to.  If not specified 
			 * then a file save dialog will be displayed
			 * @param {Adobe.Photoshop.MeasurementRange} range which 
			 * measurements to export.  Default to selected
			 * @param {any[]} dataPoints array of identifiers of data 
			 * points to export.  The order of the data points is respected 
			 * in the exported file.  Defaults to data points visible in 
			 * Measurement Log palette
			 * @returns {void}
			 */
			public exportMeasurements(file: File, range: Adobe.Photoshop.MeasurementRange, dataPoints: any[]): void;
		}
	}
}