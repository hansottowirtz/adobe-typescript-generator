/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The log of measurements taken. */
		class MeasurementLog extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * Deletes the specified measurements.
			 * @param {Adobe.Photoshop.MeasurementRange} range - The 
			 * measurements to delete. Default: selected.
			 */
			public deleteMeasurements(range: Adobe.Photoshop.MeasurementRange): void;
			/**
			 * Exports the specified measurements.
			 * @param {Adobe.Flash.Filesystem.File} file - The file to 
			 * export to. If not specified, a 'file save' dialog is 
			 * displayed.
			 * @param {Adobe.Photoshop.MeasurementRange} range - The 
			 * measurements to export. Default: selected.
			 * @param {any} dataPoints - An array of identifiers of data 
			 * points to export. The order of the data points is respected 
			 * in the exported file. Defaults to data points visible in 
			 * Measurement Log palette.
			 */
			public exportMeasurements(file: Adobe.Flash.Filesystem.File, range: Adobe.Photoshop.MeasurementRange, dataPoints: any): void;
		}
	}
}