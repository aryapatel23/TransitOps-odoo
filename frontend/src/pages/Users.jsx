import React, { useState, useEffect } from 'react';
import { Plus, X, Trash2 } from 'lucide-react';
import { api } from '../api';

const ROLES = ['FLEET_MANAGER', 'DISPATCHER', 'SAFETY_OFFICER', 'FINANCIAL_ANALYST'];

const ROLE_COLORS = {
  FLEET_MANAGER: '#714B67',
  DISPATCHER: '#2B6CB0',
  SAFETY_OFFICER: '#2F855A',
  FINANCIAL_ANALYST: '#B7791F',
};

const Modal = ({ title, onClose, children }) => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.65)',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }}>
    <div style={{
      backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)',
      borderRadius: '2px', width: '480px', maxHeight: '90vh', overflowY: 'auto'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 20px', borderBottom: '1px solid var(--border-color)'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'var(--font-title)' }}>{title}</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
          <X size={18} />
        </button>
      </div>
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  </div>
);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'DISPATCHER' });
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.getUsers();
      setUsers(res.users || res);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);
    try {
      if (editing) {
        const payload = { name: form.name, email: form.email, role: form.role };
        if (form.password) payload.password = form.password;
        await api.updateUser(editing.id, payload);
      } else {
        await api.createUser(form);
      }
      setShowModal(false);
      setEditing(null);
      setForm({ name: '', email: '', password: '', role: 'DISPATCHER' });
      await load();
    } catch (e) {
      setFormError(e.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (u) => {
    if (!window.confirm(`Delete user ${u.name}? This cannot be undone.`)) return;
    try {
      await api.deleteUser(u.id);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const openEdit = (u) => {
    setEditing(u);
    setForm({ name: u.name, email: u.email, password: '', role: u.role });
    setFormError('');
    setShowModal(true);
  };

  const openCreate = () => {
    setEditing(null);
    setForm({ name: '', email: '', password: '', role: 'DISPATCHER' });
    setFormError('');
    setShowModal(true);
  };

  const roleCounts = ROLES.reduce((acc, r) => ({ ...acc, [r]: users.filter(u => u.role === r).length }), {});

  return (
    <div>
      {/* Role Summary Strip */}
      <div className="grid grid-cols-4" style={{ marginBottom: '16px' }}>
        {ROLES.map(role => (
          <div key={role} className="card" style={{ padding: '12px 14px', borderLeft: `3px solid ${ROLE_COLORS[role]}` }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
              {role.replace(/_/g, ' ')}
            </div>
            <div style={{ fontSize: '22px', fontWeight: '700', fontFamily: 'var(--font-title)', color: ROLE_COLORS[role] }}>
              {roleCounts[role] ?? 0}
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={14} /> Create User
        </button>
      </div>

      {error && <div style={{ color: '#F56565', marginBottom: '8px' }}>{error}</div>}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading…</td></tr>}
            {!loading && users.length === 0 && (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No users found.</td></tr>
            )}
            {users.map(u => (
              <tr key={u.id}>
                <td style={{ fontFamily: 'monospace', fontSize: '12px' }}>{u.id}</td>
                <td style={{ fontWeight: '500' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '2px',
                      backgroundColor: ROLE_COLORS[u.role] || 'var(--primary-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: '700', fontSize: '12px', flexShrink: 0
                    }}>
                      {u.name?.[0]?.toUpperCase()}
                    </div>
                    {u.name}
                  </div>
                </td>
                <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{u.email}</td>
                <td>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '3px 8px', fontSize: '11px', fontWeight: '600',
                    borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '0.3px',
                    backgroundColor: `${ROLE_COLORS[u.role]}22`,
                    color: ROLE_COLORS[u.role],
                    border: `1px solid ${ROLE_COLORS[u.role]}44`
                  }}>
                    {u.role?.replace(/_/g, ' ')}
                  </span>
                </td>
                <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {u.created_at ? new Date(u.created_at).toLocaleDateString() : '—'}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '4px 8px', fontSize: '12px' }}
                      onClick={() => openEdit(u)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '4px 8px', fontSize: '12px' }}
                      onClick={() => handleDelete(u)}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create / Edit Modal */}
      {showModal && (
        <Modal title={editing ? `Edit User: ${editing.name}` : 'Create New User'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="grid grid-cols-2">
              <div>
                <label>Full Name *</label>
                <input value={form.name} onChange={e => set('name', e.target.value)} required />
              </div>
              <div>
                <label>Email *</label>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)} required />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <label>{editing ? 'New Password (leave blank to keep)' : 'Password *'}</label>
                <input type="password" value={form.password} onChange={e => set('password', e.target.value)} required={!editing} />
              </div>
              <div>
                <label>Role *</label>
                <select value={form.role} onChange={e => set('role', e.target.value)}>
                  {ROLES.map(r => <option key={r} value={r}>{r.replace(/_/g, ' ')}</option>)}
                </select>
              </div>
            </div>
            {/* Role preview chip */}
            {form.role && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 12px', borderRadius: '2px',
                backgroundColor: `${ROLE_COLORS[form.role]}18`,
                border: `1px solid ${ROLE_COLORS[form.role]}44`
              }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '2px',
                  backgroundColor: ROLE_COLORS[form.role]
                }} />
                <span style={{ fontSize: '12px', fontWeight: '500', color: ROLE_COLORS[form.role] }}>
                  {form.role.replace(/_/g, ' ')}
                </span>
              </div>
            )}
            {formError && <div style={{ color: '#F56565', fontSize: '13px' }}>{formError}</div>}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={formLoading}>
                {formLoading ? 'Saving...' : editing ? 'Update User' : 'Create User'}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Users;
