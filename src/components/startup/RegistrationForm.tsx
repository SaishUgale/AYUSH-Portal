import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { StartupRegistrationForm, AyushCategory, StartupStage } from '../../types/startup';

const ayushCategories: AyushCategory[] = ['Ayurveda', 'Yoga', 'Unani', 'Siddha', 'Homeopathy'];
const startupStages: StartupStage[] = ['Ideation', 'Validation', 'Early Traction', 'Scaling'];

export default function RegistrationForm() {
  const [form, setForm] = useState<StartupRegistrationForm>({
    companyName: '',
    registrationNumber: '',
    ayushCategory: 'Ayurveda',
    stage: 'Ideation',
    foundedDate: '',
    teamSize: 1,
    description: '',
    documents: {
      registration: null,
      msme: null,
      pitch: null,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">AYUSH Category</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={form.ayushCategory}
            onChange={(e) => setForm({ ...form, ayushCategory: e.target.value as AyushCategory })}
          >
            {ayushCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Startup Stage</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={form.stage}
            onChange={(e) => setForm({ ...form, stage: e.target.value as StartupStage })}
          >
            {startupStages.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Documents</label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {['registration', 'msme', 'pitch'].map((doc) => (
              <div key={doc} className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-green-500">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setForm({
                      ...form,
                      documents: { ...form.documents, [doc]: file },
                    });
                  }}
                />
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <span className="mt-2 block text-sm font-medium text-gray-900 capitalize">
                    {doc} Document
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Submit Registration
      </button>
    </form>
  );
}