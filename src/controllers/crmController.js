const Crm = require('../models/crmModel');

// Get all CRM records
exports.getAllCrms = async (req, res) => {
    try {
        const crms = await Crm.find();
        res.status(200).json(crms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single CRM record by ID
exports.getCrmById = async (req, res) => {
    try {
        const crm = await Crm.findById(req.params.id);
        if (!crm) return res.status(404).json({ message: 'CRM not found' });
        res.status(200).json(crm);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new CRM record
exports.createCrm = async (req, res) => {
    try {
        const crm = new Crm(req.body);
        const savedCrm = await crm.save();
        res.status(201).json(savedCrm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a CRM record by ID
exports.updateCrm = async (req, res) => {
    try {
        const updatedCrm = await Crm.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedCrm) return res.status(404).json({ message: 'CRM not found' });
        res.status(200).json(updatedCrm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a CRM record by ID
exports.deleteCrm = async (req, res) => {
    try {
        const deletedCrm = await Crm.findByIdAndDelete(req.params.id);
        if (!deletedCrm) return res.status(404).json({ message: 'CRM not found' });
        res.status(200).json({ message: 'CRM deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};